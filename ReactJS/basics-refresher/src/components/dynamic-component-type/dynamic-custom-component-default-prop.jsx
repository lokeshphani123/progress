import SampleLabel from "./sample-label-component";

export default function DefaultPropValues({abc = <SampleLabel label="Default Prop Values Label" />}) {
    return (
        <>
            {abc}
        </>
    )
}

