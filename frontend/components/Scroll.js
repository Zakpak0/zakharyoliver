import { yellowA } from '@radix-ui/colors';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '@stitches/react';
const SCROLLBAR_SIZE = 8;

const ScrollAreaRoot = styled(ScrollArea.Root, {
    borderRadius: 4,
    overflow: 'hidden',
    justifySelf: "center"
});

const ScrollAreaViewport = styled(ScrollArea.Viewport, {

    borderRadius: 'inherit',
});

const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
    display: 'flex',
    // ensures no selection
    userSelect: 'none',
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: 'none',
    padding: 2,
    background: "Black",
    transition: 'background 160ms ease-out',
    '&:hover': { background: "Black" },
    '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
    '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
        height: SCROLLBAR_SIZE,
    },
});

const ScrollAreaThumb = styled(ScrollArea.Thumb, {
    flex: 1,
    background: "Grey",
    borderRadius: SCROLLBAR_SIZE,
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: 44,
        minHeight: 44,
    },
});

const ScrollAreaCorner = styled(ScrollArea.Corner, {
    background: "Black",
});

const ScrollBar = ({ content, height, width, header }) => {

    return (
        <>
            <ScrollAreaRoot
                css={{
                    background: yellowA.yellowA9
                }}
            >
                {header}
                <ScrollAreaViewport css={{
                    backgroundColor: 'white',
                    height: height || 320,
                    width: width || 550,
                }}>
                    {content}
                </ScrollAreaViewport>
                <ScrollAreaScrollbar orientation="vertical">
                    <ScrollAreaThumb />
                </ScrollAreaScrollbar>
                <ScrollAreaScrollbar orientation="horizontal">
                    <ScrollAreaThumb />
                </ScrollAreaScrollbar>
                <ScrollAreaCorner />
            </ScrollAreaRoot>
        </>
    )
}
export default ScrollBar