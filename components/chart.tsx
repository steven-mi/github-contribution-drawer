import {getArray} from "../pages/utils";

export default function Chart() {
    return (
        <svg width={717} height={112}>
            {
                getArray(52).map(col => {
                        return <g transform={`translate(${col * 14}, 0)`} key={`col_${col}`}>
                            {getArray(7).map(row =>
                                <rect width="10" height="10" x={14 - col} y={row * 13} rx="2"
                                      ry="2" key={`el_${row}`} className="black"/>
                            )}
                        </g>
                    }
                )
            }

        </svg>

    )
}