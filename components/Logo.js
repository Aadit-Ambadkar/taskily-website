function Logo(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="134" height="356" fill="none" viewBox="3 63 67 178" className="w-full">
            <path fill={props.dark=="true" ? "#fff" : "#000"} d="M47.756 149.123c2.523 0 4.97-.253 7.342-.757a72.143 72.143 0 0 0 7.19-1.892v17.18c-2.473 1.11-5.55 2.018-9.234 2.724-3.633.757-7.619 1.136-11.958 1.136-5.045 0-9.586-.808-13.623-2.422-3.986-1.665-7.14-4.516-9.46-8.552-2.27-4.087-3.406-9.764-3.406-17.029V98.717H3.557v-9.763l12.715-7.72 6.66-17.861H37.69v18.013h23.69v17.331H37.69v40.794c0 3.229.909 5.651 2.725 7.265 1.867 1.564 4.314 2.347 7.341 2.347Z"/>
            <mask id="a" width="34" height="87" x="30" y="63" maskUnits="userSpaceOnUse" className="[mask-type:alpha]">
                <path fill={props.dark=="true" ? "#fff" : "#000"} d="M30 132V63h33.5v83s-12.782 4.99-21.5 3c-7.72-1.763-12-9.485-12-17Z"/>
            </mask>
            <g mask="url(#a)">
                <path fill="url(#b)" d="M47.756 149.123c2.523 0 4.97-.253 7.342-.757a72.143 72.143 0 0 0 7.19-1.892v17.18c-2.473 1.11-5.55 2.018-9.234 2.724-3.633.757-7.619 1.136-11.958 1.136-5.045 0-9.586-.808-13.623-2.422-3.986-1.665-7.14-4.516-9.46-8.552-2.27-4.087-3.406-9.764-3.406-17.029V98.717H3.557v-9.763l12.715-7.72 6.66-17.861H37.69v18.013h23.69v17.331H37.69v40.794c0 3.229.909 5.651 2.725 7.265 1.867 1.564 4.314 2.347 7.341 2.347Z"/>
            </g>
            <defs>
                <linearGradient id="b" x1="33.5" x2="33.5" y1="0" y2="178" gradientUnits="userSpaceOnUse">
                <stop offset=".526" stopColor="#D05A5A"/>
                <stop offset=".792" stopColor="#FADCB0"/>
                </linearGradient>
            </defs>
        </svg>
    )
}

Logo.defaultProps = {
    dark: "false"
}

export default Logo;