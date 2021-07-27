const DoneIcon = props => {
    const { width, height, fill, strokeColor, strokeWidth } = props;

    return <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24'
        fill={fill} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
        <path fill={fill} stroke='none' d='M0 0h24v24H0z' />
        <polyline points='9 11 12 14 20 6' />
        <path d='M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9' />
    </svg>;
};

export default DoneIcon;

DoneIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    fill: 'none',
    strokeColor: '#000',
    strokeWidth: '1.5',
}