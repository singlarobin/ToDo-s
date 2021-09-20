const EditIcon = props => {
    const { width, height, fill, strokeColor, strokeWidth, style } = props;

    return <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' style={style}
        fill={fill} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap='round' strokeLinejoin='round'>
        <path fill={fill} stroke='none' d='M0 0h24v24H0z' />
        <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
        <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
        <line x1='16' y1='5' x2='19' y2='8' />
    </svg>;
};

export default EditIcon;

EditIcon.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
    fill: 'none',
    strokeColor: '#102F81',
    strokeWidth: '1.5',
};