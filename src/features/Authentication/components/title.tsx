interface Prop{
    title: string
    desc: string
}
const Title = ({title,desc}:Prop) => {
    return ( 
        <div className="flex flex-col gap-2 items-start justify-start w-full ">
            <h2 className="text-2xl sm:text-4xl font-medium ">{title}</h2>
            <p className="text-sm">{desc}</p>
        </div>
     );
}
 
export default Title;