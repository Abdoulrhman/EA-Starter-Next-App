import React from 'react';

import styles from './styles.module.scss';
import Search from '../SearchFilter/Search';

const Filter = () => (
  <div>
    <div className={styles.Filter}>
      <div className={styles.texttopFilter}>
        <p className={styles.texthead1}>Filters</p>
        <p className={styles.texthead2}>Reset All Filters</p>
      </div>
      <div className={styles.Accordion}>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Category</h5>
            </div>
          </div>
          <div className={styles.AccordionPanel}>
            <form action="/action_page.php">
              <Search />
              <label className={styles.container} htmlFor="test">
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" id="test" />
                <span className={styles.checkmark} />
                {console.log('tets')}
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Vehicle Type</h5>
            </div>
          </div>
          <div>
            <form action="/action_page.php">
              <Search />
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Make</h5>
            </div>
          </div>
          <div>
            <form action="/action_page.php">
              <Search />
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Model</h5>
            </div>
          </div>
          <div>
            <form action="/action_page.php">
              <Search />
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Auction End Date</h5>
            </div>
          </div>
          <div>
            <form action="/action_page.php">
              <Search />
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
              <label className={styles.container}>
                <span className={styles.textbody1}>Ford</span>
                <span className={styles.textbody2}>18,113</span>
                <input type="checkbox" />
                <span className={styles.checkmark} />
              </label>
            </form>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Odometer</h5>
            </div>
          </div>
          <div>
            <div className={styles.rangeSlider}>
              <input type="range" min="30000" max="120000" />
              <input min="0" max="120000" type="range" />
              <span className={styles.disFlexPrice}>
                <input type="number" value="25000" min="0" max="120000" />
                <h5> TO</h5>
                <input type="number" value="50000" min="0" max="120000" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Years Range</h5>
            </div>
          </div>
          <div>
            <div className={styles.rangeSlider}>
              <input type="range" min="10000" max="120000" />
              <input min="0" max="120000" type="range" />
              <span className={styles.disFlexPrice}>
                <input type="number" value="25000" min="0" max="120000" />
                <h5> TO</h5>
                <input type="number" value="50000" min="0" max="120000" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.btnFilter}>
              <h5>Price Range in AED</h5>
            </div>
          </div>
          <div>
            <div className={styles.rangeSlider}>
              <input type="range" min="20000" max="120000" />
              <input min="0" max="120000" type="range" />
              <span className={styles.disFlexPrice}>
                <input type="number" value="25000" min="0" max="120000" />
                <h5> TO</h5>
                <input type="number" value="50000" min="0" max="120000" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btnFilterSumbit}>Show Results</button>
    </div>
  </div>
);

export default Filter;
