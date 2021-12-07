import React from 'react';
import { styled } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';

const StyledToolbar = styled(ToolbarPrimitive.Root, {
    display: 'flex',
    padding: 10,
    width: '100%',
    minWidth: 'max-content',
    borderRadius: 6,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
    all: 'unset',
    flex: '0 0 auto',
    color: mauve.mauve11,
    height: 25,
    padding: '0 5px',
    borderRadius: 4,
    display: 'inline-flex',
    fontSize: 13,
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': { backgroundColor: violet.violet3, color: violet.violet11 },
    '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${violet.violet7}` },
};

const StyledButton = styled(
    'div',
    {
        paddingLeft: 10,
        paddingRight: 10,
        color: 'white',
    }
);

const StyledLink = styled(
    ToolbarPrimitive.Link,
    {
        ...itemStyles,
        backgroundColor: 'transparent',
        color: mauve.mauve11,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } }
);

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
    width: 1,
    backgroundColor: mauve.mauve6,
    margin: '0 10px',
});

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
    display: 'inline-flex',
    borderRadius: 4,
});

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
    ...itemStyles,
    boxShadow: 0,
    backgroundColor: 'white',
    marginLeft: 2,
    '&:first-child': { marginLeft: 0 },
    '&[data-state=on]': { backgroundColor: violet.violet5, color: violet.violet11 },
});

// Exports
export const Toolbar = StyledToolbar;
export const ToolbarButton = StyledButton;
export const ToolbarSeparator = StyledSeparator;
export const ToolbarLink = StyledLink;
export const ToolbarToggleGroup = StyledToggleGroup;
export const ToolbarToggleItem = StyledToggleItem;

const Bar = ({ Item, Icon, setThemeMode, themeMode, width }) => (
    <Toolbar style={{
        width: width
    }} aria-label="Formatting options">
        <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
            <ToolbarToggleItem value="bold" aria-label="Bold">
            </ToolbarToggleItem>
            <ToolbarToggleItem value="italic" aria-label="Italic">
            </ToolbarToggleItem>
            <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
            </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
            <ToolbarToggleItem value="left" aria-label="Left aligned">
            </ToolbarToggleItem>
            <ToolbarToggleItem value="center" aria-label="Center aligned">
            </ToolbarToggleItem>
            <ToolbarToggleItem value="right" aria-label="Right aligned">

            </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarLink href="#" target="_blank" css={{ marginRight: 10 }}>

        </ToolbarLink>
        <ToolbarButton css={{ marginLeft: 'auto' }}> <Item label={Icon} setThemeMode={setThemeMode} themeMode={themeMode} /></ToolbarButton>
    </Toolbar>
);

export default Bar;

