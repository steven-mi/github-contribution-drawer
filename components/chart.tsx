import {getArray} from "../pages/utils";

export default function Chart() {
    return (
        <svg
        >
            {
                getArray(20).map(value => {
                        return <g transform={`translate(${value * 14}, 0)`}>
                            {getArray(5).map(value =>
                                <rect width="10" height="10" x="11" y={value * 13} rx="2"
                                      ry="2"/>
                            )}
                        </g>
                    }
                )
            }

        </svg>

    )
}