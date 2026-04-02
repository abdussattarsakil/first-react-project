// export default function ToDo() {
//     return (
//         <h1>From hungray.jsx file</h1>
//     )

// }

export default function ToDo({ isDeveloper, namePrefix, nameSuffix ,time}) {

    return isDeveloper ? <p>{namePrefix} {nameSuffix} -Duration {time?time:100}</p> : <p>{nameSuffix} - not a programmer</p>

}