export default function Tabs({buttons, childern, buttonContainer}) {
    //Remapping the component to const. We can do this directly, refer 'DynamicCustomComponent' function
    const ButtonContainer = buttonContainer;
    return (
        <>
            <ButtonContainer>{buttons}</ButtonContainer>
            {childern}
        </>
    )
}
