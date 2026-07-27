import { navigation } from "@/constants/navigation";
import NavItem from "./NavItem";

export default function MobileSidebar({

    open,

    setOpen

}) {

    if (!open) return null;

    return (

        <>

            <div

                className="fixed inset-0 bg-black/50 z-40"

                onClick={() => setOpen(false)}

            />

            <aside

                className="fixed left-0 top-0 z-50 h-full w-64 bg-white dark:bg-slate-900 p-4"

            >

                <h2 className="text-xl font-bold mb-8">

                    TeamTask

                </h2>

                <div className="space-y-2">

                    {navigation.map(item => (

                        <NavItem

                            key={item.path}

                            item={item}

                            onClick={() =>
                                setOpen(false)
                            }

                        />

                    ))}

                </div>

            </aside>

        </>

    );

}