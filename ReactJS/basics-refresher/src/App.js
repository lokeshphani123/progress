import { Fragment, useState } from 'react';
import './App.css';
import hooksDefinitions from './utils/hooks';
import Conditional from './components/conditional-display/conditional';
import Styling from './components/dynamic-styling/styling';
import DynamicList from './components/dynamic-list/list';
import namesList from './utils/table';
import Tabs from './components/dynamic-component-type/dynamic-component-type';
import DynamicCustomComponent from './components/dynamic-component-type/dynamic-custom-component';
import DefaultPropValues from './components/dynamic-component-type/dynamic-custom-component-default-prop';

function PropsComponent(props){
  return (
    <div>
    <div>{props.children}</div>
    <h6>This is Props Component</h6>
    <h6>{props.title}</h6>
    <h6>{props.country}</h6>
    </div>
  )
}

function SampleLabelComponent({label}){
  return (
    <div>
      <h5>{ label }</h5></div>
  )
}

function SampleChildrenComponent(props){
  return (
    <article className="card">
      {props.children}
    </article>
  )
}

function AlternativePropsSyntaxComponent({title, country}){
  return (
    <div>
    <h6>This is Props Component</h6>
    <h6>{title}</h6>
    <h6>{country}</h6>
    </div>
  )
}
function handleSelect(selectedButton){
  console.log(selectedButton);
}
function TabButton({children, onSelect}) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>

  )
}
let trickyScinario = 'Hey this is tricky';
function handleTrickySelect(selectedButton){
  trickyScinario = selectedButton;
  console.log(trickyScinario);
}
function AandleHyperlinks(props){
  return <a href={props.url}>{props.label}</a>;
}
function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
function ParentComponent() {
  return (
    <div>
      <ChildComponent name="John" age={25} />
    </div>
  );
}

function ChildComponent1(props) {
  return (
    <div>
      <h6>Child Component</h6>
      {props.children}
    </div>
  );
}
function ParentComponent1() {
  return (
    <div>
      <ChildComponent1>
        <p>This is a child paragraph.</p>
        <button>Click Me</button>
      </ChildComponent1>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [tableContents] = useState(hooksDefinitions);
  const importedValue = "I'm the dynamic value";
  const testObjectArray = [
    {
      title:"Hello",
      country:"USA"
    },
    {
      title:"Willow",
      country:"USA"
    }
  ]

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Under sould of React framework: </h1> <AandleHyperlinks url="https://codedamn.com/news/reactjs/how-react-works" label="Understand under the React's hood"/>
          <h1>For project structure: </h1> <AandleHyperlinks url="https://github.com/leyap/react-global-dialog-demo/blob/master/src/components/Dialog/dialog.js" label="react-project"/>
          <h1>Component: </h1> Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
          <br/>
          <h1>How JSX is parsed in React? </h1> In react components are basically like functions that are called as HTML tags. When the HTML tags are executed the JSX code is parsed and arranged as DOM. 
          Later if we want to update the page we need to use State.
          <h1>Dynamic values: </h1> You can send the dynamic values using {} in the JSX file of the comonent Ex: image, calculated value executed, img src={importedValue}
          <h1>Props: </h1> It is used to pass data to components. Ex 1: <PropsComponent {...testObjectArray[0]}/>
          <br/>
          Ex 2: <AlternativePropsSyntaxComponent {...testObjectArray[0]}/>
          Ex 3: <ParentComponent/>
          <h1>Props.children: </h1> React automatically passes a special prop named "children" to every custom component. In other words it is the content between the component tag.
          Ex 1: <SampleLabelComponent label='This is Props Children'/>
          Ex 2: <SampleChildrenComponent>This is Test </SampleChildrenComponent>
          Ex 3: <ParentComponent1/>
          <section>
          <h1>Props vs Childern: </h1> 1. Unlike props, children is not an explicit attribute; instead, it represents the content between the opening and closing tags of the component.
          <br/>
          2. Props (short for properties) are a way to pass data from a parent component to a child component. They are essentially custom attributes that you define on your components. Props are passed explicitly as attributes in JSX and can be of any data type, including strings, numbers, arrays, objects, functions, etc. Props are immutable (read-only) within the child component. The child component cannot modify its props directly.

          <h1>Dynamic Events: </h1> 
            <menu>
              <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('PROPS')}>PROPS</TabButton>
              <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
            </menu>

          </section>
          <section>
          <h1>React page only executed once Dynamic Events: </h1> By default React components only gets execute once. We need to externally say React to get execute once more. So don't use let or const instead use State concept in REACT.
            <menu>
              <TabButton onSelect={() => handleTrickySelect('Components')}>Components</TabButton>
              <TabButton onSelect={() => handleTrickySelect('PROPS')}>PROPS</TabButton>
              <TabButton onSelect={() => handleTrickySelect('State')}>State</TabButton>
            </menu>
          {trickyScinario}
          </section>
          <h1>States: </h1> This state is all about registering variables. They are handled by React and are updated by the function that's provided by React, that will also tell react that data changed and finally that will cause React to update the UI. The special function is called 'useState' and this is also called React hook. In other words, It's data that, when changed, causes React to re-evalute a component. 
          <br/>1. The hooks are only declared inside of Component funcations <br/> 2. The hooks should only be declared on the top level or nested in code.This is App state. <br/> 3. Compute values are values that shouldn't be managed as separate state since they can be derived from other state.
          <br/>
          <h1>Hooks:</h1>
          <div>
            <div className="tab-buttons">
              <button onClick={() => handleTabClick(0)}>useState</button>
              <button onClick={() => handleTabClick(1)}>useEffect</button>
              <button onClick={() => handleTabClick(2)}>useContext</button>
              <button onClick={() => handleTabClick(3)}>useRef</button>
              <button onClick={() => handleTabClick(4)}>useReducer</button>
              <button onClick={() => handleTabClick(5)}>useCallback</button>
              <button onClick={() => handleTabClick(6)}>useMemo</button>
              <button onClick={() => handleTabClick(6)}>Custom Hook</button>
            </div>
            <div className="tab-content">
              <h1>{tableContents[activeTab].title}</h1>
              <p>{tableContents[activeTab].definition}</p>
              <h3>Some of the rules of useState:</h3>
              <p>{tableContents[activeTab].rules}</p>
            </div>
          </div>
          <br/>
          <h1>Conditional rendering: </h1>
          <Conditional/>
          <br/>
          <h1>Dynamic Styling: </h1>
          <Styling/>
          <h1>Dynamic List data output: </h1>
            Execute the component as many as list size times
            <ul>
              {namesList.map((todo) => (
                <DynamicList text={todo} />
              ))} 
            </ul>
          <h1>Fragment: </h1> We cannot return multiple JSX elements in the return statement, In this case, if you want to 
          return multiple elements without duplicate div we opt for a wrapper of elements called Fragment. For example:
          <br/>
          <code>
            return (
              <Fragment>
                &lt;header/&gt;
                &lt;main&gt;&lt;/main&gt;
              </Fragment>)

            OR

            return (
            <>
              &lt;header/&gt;
              &lt;main&gt;&lt;/main&gt;
            </>)
          </code>
          <h1>Tip: </h1> When you design the component make sure that the App component or the parent component does not re-execute the
          child component. If this scenario occurs divide the logic to a different component and import it to the App or Parent component.
          <h1>Need for Forwarded Props: </h1> The need for Forwarded Props occurs because React internally does not forward the css elements like id, class etc.,
          to the child component. They need to be send as normal Props like:
          <br/>
          <br/>
          <h3>Example 1 (we need to manually pass id from App.jsx to the component of Section.jsx):</h3>
          <code>
            App.jsx:
              &lt;Section id="examples"/&gt;
              <br/>
              <br/>
            App.css:
              .examples &#123;align:left&#125;
              <br/>
              <br/>
            Section.jsx:
              export default function Section(&#123; id &#125;) &#123;
                return (
                  &lt;section id=&#123;id&#125;/&gt;                  
                )
                &#125;            
          </code>
          <br/>
          <h3>Example 2 (using ...props if there are multiple css elements that needs tobe passed to a html tag):</h3>
          <code>
            App.jsx:
              &lt;Section id="examples" className="mainClass"/&gt;
              <br/>
              <br/>
            App.css:
              .examples &#123;align:left&#125;
              <br/>
              <br/>
            Section.jsx:
              export default function Section(&#123; ...props &#125;) &#123;
                return (
                  &lt;section &#123;...props&#125;/&gt;                  
                )
                &#125;            
          </code>
          <br/>
          <br/>
          Above is the scenario where we use Forwarded Props
          <br/>
          <h1>Setting Component Types Dynamically: </h1> We can inject the custom or built-in components as props. In exampl-1, we passed the built-in 'menu' component.
          In example-1, we passed the custom component.
          <h3>Example 1: (Pass built-in 'menu' component) </h3>
          <code>
          &lt;Tabs 
          buttonContainer="menu"
          buttons=&#123;
          <br/>
          &lt;&gt;
          <br/>
            &lt;TabButton/&gt; onSelect=&#123;() =&gt; handleSelect('Components')&#125;&gt; Components &lt;/TabButton&gt;
          <br/>
          &lt;/&gt;
          </code>
          <Tabs 
          buttonContainer="menu"
          buttons={
            <>
              <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            </>
          }></Tabs>
          <br/>          
          <h3>Example 2: (Pass custom 'SampleLabelComponent' component with 'label' prop) </h3>
          <code>
          &lt;DynamicCustomComponent SampleLabelComponent=&#123;SampleLabelComponent(&#123; label: "Custom Label" &#125;)&#125;&gt;&lt;/DynamicCustomComponent&gt;
          </code>
          <DynamicCustomComponent SampleLabelComponent={SampleLabelComponent({ label: "Custom Label" })}></DynamicCustomComponent>
          <br/>
          <h3>Example 3: (Setting default props values) </h3>
          <code>
          DefaultPropValues(&#123;abc = &lt;SampleLabel label="Default Prop Values Label" /&gt;&#125;)
          &lt;DynamicCustomComponent SampleLabelComponent=&#123;SampleLabelComponent(&#123; label: "Custom Label" &#125;)&#125;&gt;&lt;/DynamicCustomComponent&gt;
          </code>
          <DefaultPropValues/>
          <br/>
          <h1>Multiple Component Slots: </h1> 
          <h1>Element Identifiers as Props: </h1> 
          <h1>Default Prop values: </h1> 

        </p>
      </header>
    </div>
  );
}

export default App;
