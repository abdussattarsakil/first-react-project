// export default function ToDo() {
//     return (
//         <h1>From hungray.jsx file</h1>
//     )

// }

export default function ToDo({ isDeveloper, namePrefix, nameSuffix }) {

    return isDeveloper ? <p>{namePrefix} {nameSuffix}</p> : <p>{nameSuffix}</p>

}