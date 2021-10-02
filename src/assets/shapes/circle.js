const Circle = props => {
    const { fill, style } = props;
    return <svg width="312" height="335" viewBox="0 0 312 335" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f)">
            <ellipse cx="156" cy="167.5" rx="152" ry="163.5" fill={fill} fillOpacity="0.61" style={{ transition: 'fill 0.25s' }} />
        </g>
        <defs>
            <filter id="filter0_f" x="0" y="0" width="312" height="335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
            </filter>
        </defs>
    </svg>;

}

export default Circle;