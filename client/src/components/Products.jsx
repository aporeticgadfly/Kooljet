import React from 'react';

class Products extends React.Component {

  render() {
    return (
      <div className="productsDiv">
        <div >
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada. READ MORE</p>
        </div>
        <div className="prdctitm">
          <img src={require("../images/placeholder.jpg")}/>
          <div>
            <h2>Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada. READ MORE</p>
          </div>
        </div>
        <div className="prdctitm">
          <img src={require("../images/placeholder.jpg")}/>
          <div>
            <h2>Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada. READ MORE</p>
          </div>
        </div>
        <div className="prdctitm">
          <img src={require("../images/placeholder.jpg")}/>
          <div>
            <h2>Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id dui eget magna convallis hendrerit. Ut mauris lacus, sollicitudin quis tristique at, egestas in nunc. Suspendisse potenti. Praesent vel rhoncus elit. Curabitur quis risus condimentum, vestibulum eros non, luctus leo. Etiam vestibulum, nibh ut lacinia maximus, augue magna interdum sapien, quis pellentesque odio eros sit amet nulla. Phasellus porttitor egestas malesuada. READ MORE</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
