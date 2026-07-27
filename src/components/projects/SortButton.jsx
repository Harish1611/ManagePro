import {
    FiArrowDown,
    FiArrowUp,
} from "react-icons/fi";

export default function SortButton({

    label,

    field,

    filters,

    setFilters,

}) {

    const active = filters.sort.includes(field);

    const descending =
        filters.sort.startsWith("-");

    const handleSort = () => {

        let sort = field;

        if (
            active &&
            !descending
        ) {

            sort = `-${field}`;

        }

        setFilters({

            ...filters,

            sort,

        });

    };

    return (

        <button

            onClick={handleSort}

            className="flex items-center gap-1 font-semibold"

        >

            {label}

            {active &&
                (descending
                    ? <FiArrowDown size={14} />
                    : <FiArrowUp size={14} />
                )}

        </button>

    );

}