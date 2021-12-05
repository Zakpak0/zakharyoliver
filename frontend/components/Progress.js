import * as Progress from '@radix-ui/react-progress'
import { styled } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
const LoadingContainer = styled('div', {
    justifySelf: "center",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
})
const ProgressRoot = styled(Progress.Root, {
    justifySelf: "center",
    position: "relative",
    padding: "3px 2px 3px 2px",
    overflow: 'hidden',
    background: blackA.blackA9,
    borderRadius: '99999px',
    boxShadow: `0 2px 10px ${blackA.blackA7}`,
    border: "solid",
    width: 300,
    height: 25,
});
const LoadingHeader = styled('h3', {
    textAlign: "center"
})
const ProgressIndicator = styled(Progress.Indicator, {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: '99999px',
    transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});
const ProgressBar = ({ loading_header, progress }) => {
    return (
        <>
            <LoadingContainer>
                <LoadingHeader>{loading_header}</LoadingHeader>
                <ProgressRoot>  <ProgressIndicator style={{ width: `${progress}%` }} /></ProgressRoot></LoadingContainer></>
    )
}
export default ProgressBar