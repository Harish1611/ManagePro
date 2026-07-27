import Card from "@/components/ui/Card";

const projects = [

    "Company Website",

    "CRM",

    "Mobile App",

    "ERP"

];

export default function RecentProjects() {

    return (

        <Card title="Recent Projects">

            <ul className="space-y-3">

                {projects.map(project => (

                    <li
                        key={project}
                        className="border-b pb-2"
                    >

                        {project}

                    </li>

                ))}

            </ul>

        </Card>

    );

}