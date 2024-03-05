import NavTabs from "./NavTabs";

export default function Header({currentPage, handlePageChange}) {
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent:"space-between"}}>
        <img src={require(`../Assets/JY.png`)} alt="JY Logo" class="logo"/>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} class="split" />
    </div>)
}