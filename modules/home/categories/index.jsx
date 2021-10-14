import React from 'react'
import Slider from 'react-slick'
import styles from './styles.module.scss'

function Categories() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  }
  return (
    <>

      <div className={styles.categoriesContainer}>
        <header>
          <h2>Categories</h2>
          <p>Here you can select category to explore more items</p>
        </header>
        <div className={styles.category}>
          <div className={styles.selectCategory}>
            <h3 className={styles.headTitle}>Select Category</h3>
            <div className={styles.selectCategoryContainer}>
              <Slider {...settings}>

                <div className={styles.selectCategoryItem}>
                  <div className={styles.iconContainer}>
                    <img src="/assets/home/category/icons/category-sec-1.svg" alt="" />
                  </div>
                  <h5 className={styles.itemTitle}>Vehicle</h5>
                  <p className={styles.itemsubTitle}>12h:3m</p>
                </div>
                <div className={styles.selectCategoryItem}>
                  <div className={styles.iconContainer}>
                    <img src="/assets/home/category/icons/category-sec-1.svg" alt="" />
                  </div>
                  <h5 className={styles.itemTitle}>Vehicle</h5>
                  <p className={styles.itemsubTitle}>12h:3m</p>
                </div>
                <div className={styles.selectCategoryItem}>
                  <div className={styles.iconContainer}>
                    <img src="/assets/home/category/icons/category-sec-1.svg" alt="" />
                  </div>
                  <h5 className={styles.itemTitle}>Vehicle</h5>
                  <p className={styles.itemsubTitle}>12h:3m</p>
                </div>
                <div className={styles.selectCategoryItem}>
                  <div className={styles.iconContainer}>
                    <img src="/assets/home/category/icons/category-sec-1.svg" alt="" />
                  </div>
                  <h5 className={styles.itemTitle}>Vehicle</h5>
                  <p className={styles.itemsubTitle}>12h:3m</p>
                </div>
                <div className={styles.selectCategoryItem}>
                  <div className={styles.iconContainer}>
                    <img src="/assets/home/category/icons/category-sec-1.svg" alt="" />
                  </div>
                  <h5 className={styles.itemTitle}>Vehicle</h5>
                  <p className={styles.itemsubTitle}>12h:3m</p>
                </div>
                <div className={styles.selectCategoryItem}>
                  <div className={styles.iconContainer}>
                    <img src="/assets/home/category/icons/category-sec-1.svg" alt="" />
                  </div>
                  <h5 className={styles.itemTitle}>Vehicle</h5>
                  <p className={styles.itemsubTitle}>12h:3m</p>
                </div>
                <div className={styles.selectCategoryItem}>
                  <div className={styles.iconContainer}>
                    <img src="/assets/home/category/icons/category-sec-1.svg" alt="" />
                  </div>
                  <h5 className={styles.itemTitle}>Vehicle</h5>
                  <p className={styles.itemsubTitle}>12h:3m</p>
                </div>

              </Slider>
            </div>
          </div>
          <div className={styles.platesNumbers}>
            <h3 className={styles.headTitle}>Latest Dubai Plates Numbers</h3>
            <p className={styles.headsubTitle}>
              Select your emirate to bid on, or you can request a bespoke one
            </p>
            <div className={styles.platesNumbersContainer}>
              <div className={styles.platesNumbersItem}>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img src="/assets/home/category/logos/logo1.png" alt="Abi Dhabi logo" />
                  </div>
                  <div className={styles.label}>
                    <p>235</p>
                  </div>
                </div>
                <div className={styles.content}>
                  <h5 className={styles.plateTitle}>Abu Dhabi Plates</h5>
                  <p className={styles.platesubTitle}>Physical Auction</p>
                </div>
              </div>
              <div className={styles.platesNumbersItem}>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img src="/assets/home/category/logos/logo1.png" alt="Abi Dhabi logo" />
                  </div>
                  <div className={styles.label}>
                    <p>235</p>
                  </div>
                </div>
                <div className={styles.content}>
                  <h5 className={styles.plateTitle}>Abu Dhabi Plates</h5>
                  <p className={styles.platesubTitle}>Physical Auction</p>
                </div>
              </div>
              <div className={styles.platesNumbersItem}>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img src="/assets/home/category/logos/logo1.png" alt="Abi Dhabi logo" />
                  </div>
                  <div className={styles.label}>
                    <p>235</p>
                  </div>
                </div>
                <div className={styles.content}>
                  <h5 className={styles.plateTitle}>Abu Dhabi Plates</h5>
                  <p className={styles.platesubTitle}>Physical Auction</p>
                </div>
              </div>
              <div className={styles.platesNumbersItem}>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img src="/assets/home/category/logos/logo1.png" alt="Abi Dhabi logo" />
                  </div>
                  <div className={styles.label}>
                    <p>235</p>
                  </div>
                </div>
                <div className={styles.content}>
                  <h5 className={styles.plateTitle}>Abu Dhabi Plates</h5>
                  <p className={styles.platesubTitle}>Physical Auction</p>
                </div>
              </div>
              <div className={styles.platesNumbersItem}>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img src="/assets/home/category/logos/logo1.png" alt="Abi Dhabi logo" />
                  </div>
                  <div className={styles.label}>
                    <p>235</p>
                  </div>
                </div>
                <div className={styles.content}>
                  <h5 className={styles.plateTitle}>Abu Dhabi Plates</h5>
                  <p className={styles.platesubTitle}>Physical Auction</p>
                </div>
              </div>
              <div className={styles.platesNumbersItem}>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img src="/assets/home/category/logos/logo1.png" alt="Abi Dhabi logo" />
                  </div>
                  <div className={styles.label}>
                    <p>235</p>
                  </div>
                </div>
                <div className={styles.content}>
                  <h5 className={styles.plateTitle}>Abu Dhabi Plates</h5>
                  <p className={styles.platesubTitle}>Physical Auction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.platesNumberSlider}>
        <div className={styles.plateNumberCard}>
          <div className={styles.cardImage}>
            <img src="" alt="" />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.label}>Current Bid:</p>
            <p className={styles.value}>
              <span>AED</span>
              121,000,000
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories