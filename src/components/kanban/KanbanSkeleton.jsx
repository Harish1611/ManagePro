export default function KanbanSkeleton() {

    return (

        <div className="grid gap-6 xl:grid-cols-4">

            {

                [...Array(4)].map((_, column) => (

                    <div

                        key={column}

                        className="rounded-xl bg-gray-100 p-4"

                    >

                        <div className="mb-5 h-6 w-32 animate-pulse rounded bg-gray-300" />

                        {

                            [...Array(4)].map((_, card) => (

                                <div

                                    key={card}

                                    className="mb-4 h-32 animate-pulse rounded-lg bg-white"

                                />

                            ))

                        }

                    </div>

                ))

            }

        </div>

    );

}