const DeleteIcon = props => {
    const { width, height, fill, strokeColor, strokeWidth } = props;
    return <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24'
        fill={fill} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
        <path fill={fill} stroke='none' d='M0 0h24v24H0z' />
        <rect x='4' y='4' width='16' height='16' rx='2' />
        <path d='M10 10l4 4m0 -4l-4 4' />
    </svg>
};

export default DeleteIcon;

DeleteIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    fill: 'none',
    strokeColor: '#000',
    strokeWidth: '1.5',
}