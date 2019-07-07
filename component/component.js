(function() {
    "use strict";

    const Component = {};

    Component.List = function({dataInfo=[], ulClass, itemClass}){
        return (<ul className={ulClass}>
            {dataInfo.map(item => {
                (<li className={itemClass} key={item.key||item.value} value={item.value}>item.text</li>)
            })}
        </ul>);
    };

    Component.Button = function({onClick, className1, text='Button'}){
        return (<button className={className1} onClick={onClick}>{text}</button>)
    };

    window.Component = Component;
})();