export default function ProjectHeader({

    onCreate

}) {


return (

<div className="flex items-center justify-between">


<h1 className="text-2xl font-bold">
Projects
</h1>


<button

onClick={onCreate}

className="
rounded-lg
bg-blue-600
px-5
py-3
text-white
hover:bg-blue-700
"

>

+ New Project

</button>


</div>

)

}