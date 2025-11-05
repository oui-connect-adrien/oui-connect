import { useCallback, useRef } from "react";

interface UseLongPressOptions {
	onLongPress: () => void;
	onClick?: () => void;
	delay?: number;
}

export const useLongPress = ({
	onLongPress,
	onClick,
	delay = 500,
}: UseLongPressOptions) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const isLongPressRef = useRef(false);
	const startPosRef = useRef<{ x: number; y: number } | null>(null);

	const start = useCallback(
		(e: React.MouseEvent | React.TouchEvent) => {
			// Store initial position for movement detection
			const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
			const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
			startPosRef.current = { x: clientX, y: clientY };

			isLongPressRef.current = false;
			timeoutRef.current = setTimeout(() => {
				isLongPressRef.current = true;
				onLongPress();
			}, delay);
		},
		[onLongPress, delay]
	);

	const clear = useCallback(
		(e: React.MouseEvent | React.TouchEvent) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}

			// Check if there was significant movement (cancel if moved too much)
			if (startPosRef.current) {
				const clientX =
					"changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
				const clientY =
					"changedTouches" in e ? e.changedTouches[0].clientY : e.clientY;
				const deltaX = Math.abs(clientX - startPosRef.current.x);
				const deltaY = Math.abs(clientY - startPosRef.current.y);

				// If moved more than 10px, don't trigger click
				if (deltaX > 10 || deltaY > 10) {
					startPosRef.current = null;
					return;
				}
			}

			// If it wasn't a long press and we have an onClick handler, call it
			if (!isLongPressRef.current && onClick) {
				onClick();
			}

			startPosRef.current = null;
		},
		[onClick]
	);

	const cancel = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		isLongPressRef.current = false;
		startPosRef.current = null;
	}, []);

	const handleMove = useCallback(
		(e: React.TouchEvent) => {
			// Cancel if moved too much during touch
			if (startPosRef.current) {
				const clientX = e.touches[0].clientX;
				const clientY = e.touches[0].clientY;
				const deltaX = Math.abs(clientX - startPosRef.current.x);
				const deltaY = Math.abs(clientY - startPosRef.current.y);

				if (deltaX > 10 || deltaY > 10) {
					cancel();
				}
			}
		},
		[cancel]
	);

	return {
		onMouseDown: start,
		onMouseUp: clear,
		onMouseLeave: cancel,
		onTouchStart: start,
		onTouchEnd: clear,
		onTouchCancel: cancel,
		onTouchMove: handleMove,
	};
};
