const rectangle = props => {
    const { fill, style } = props;
    return <svg width="257" height="321" viewBox="0 0 257 321" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f)">
            <rect x="4" y="4" width="249" height="313" rx="45" fill={fill} />
        </g>
        <defs>
            <filter id="filter0_f" x="0" y="0" width="257" height="321" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
            </filter>
        </defs>
    </svg>;
};


export default rectangle;

