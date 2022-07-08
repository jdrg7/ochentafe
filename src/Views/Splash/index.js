import Page from "../../Components/Page"
const h1SPlashStyle = {
    width: "100%",
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "1rem"
}
const Splash = () => {
    return (
        <>
            <Page 
                useAbsoluteCenter={true}
                showNavBar={true}
            >
                <h1 style={h1SPlashStyle}>Ochenta App <br />v1.0.0</h1>
            </Page>
        </>
    )
}

export default Splash;