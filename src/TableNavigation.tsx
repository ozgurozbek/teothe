function NavigateToTable(tableid) {
    document.getElementById(tableid)?.scrollIntoView()
}

export default function TablesNavigator() {
    return (<section>
     <button className="mx-4" onClick={() => {NavigateToTable("resurrection")}}>Resurrection</button>
     <button className="mx-4" onClick={() => {NavigateToTable("materialvariants")}}>Material Variants</button>
     <button className="mx-4" onClick={() => {NavigateToTable("calendar")}}>Calendar</button>
     </section>
    )
}