
export default function SkillBouble(props) {
    return (
        <div className={`${props.width} ${props.heigth} ${props.grid} font-Jost font-bold flex justify-center items-center gap-3 ${props.text} rounded-xl bg-${props.color} shadow-xl `}>
            <h3>{props.name}</h3>
            <i>{props.icon}</i>
        </div>
    )
}