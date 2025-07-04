

function IndexPage() {
  return (
    <div className="w-full h-full flex flex-col items-center m-4">
        <h1 className="text-4xl font-bold">Toto je index stranka</h1>
        
        <TestComponent name="Marek" />
        <TestComponent name="Patrik" />
        <TestComponent name="Peter" />

    </div>
  )
}

export default IndexPage








type TestComponentProps = {
    name: string
}


function TestComponent(props : TestComponentProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold">Moje meno je {props.name}</h2>
        </div>
    );
}









