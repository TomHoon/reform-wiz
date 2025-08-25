'use client'

import styles from "@/styles/content/FormContent.module.scss"
import C_1280 from "@/common/pages/C_1280";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormContent() {
  const [startDate, setStartDate] = useState(new Date());

  const [isActive, setIsActive] = useState(false);

  const [categoryList, setCategoryList] = useState([
    { selected: false, title: '의자', imgSrc: 'https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_client.svg' },
    { selected: false, title: '소파', imgSrc: 'https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_client.svg' },
    { selected: false, title: '식탁', imgSrc: 'https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_client.svg' },
    { selected: false, title: '원목가구', imgSrc: 'https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_client.svg' },
    { selected: false, title: '침대', imgSrc: 'https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_client.svg' },
    { selected: false, title: '수납장', imgSrc: 'https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_client.svg' },
    { selected: false, title: '자개', imgSrc: 'https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_client.svg' },
  ]);

  const [step, setStep] = useState(0);

  const changeActiveCategory = (idx) => {
    console.log('dix ', idx);

    const mapped = categoryList.map((item, index) => {
      if (index == idx) {
        return {
          ...item,
          selected: !item.selected
        }
      }

      return {
        ...item
      }

    });
    console.log('mapped', mapped);

    setCategoryList([...mapped]);
  }

  return (
    <div className={styles.container}>
      <C_1280>
        <div className={styles.wrapper}>
          {/* 왼쪽 */}
          <div className={styles.left}>
            <div className={styles.subTitle}>

            </div>

            <div className={styles.subProcess}>
              <ul className={styles.subProcessSteps}>
                <li className={`${step == 0 && styles.now}`}>리폼 요청 시작</li>
                <li className={`${step == 1 && styles.now}`}>리폼가구 등록</li>
                <li className={`${step == 2 && styles.now}`}>리폼 요청 완료</li>
              </ul>
            </div>

            <div className={styles.subEtc}>
              <div className={styles.counsel}>
                <img src="https://www.wishket.com/static/renewal/img/project/submit/manager_bubble.gif" alt="" />
                <p>
                  <span>금액과 리폼과정 등</span> <br />
                  리폼에 대한 모든 것을<br />
                  상담해보세요!
                </p>
                <button>무료 상담 신청</button>
              </div>
            </div>
          </div>

          {/* 오른쪽 */}

          {/* Step1 시작*/}
          {
            step == 0 &&

            <div className={styles.right}>
              <div className={styles.formWrapper}>
                <p className={styles.mainTitle}>
                  리폼가구 의뢰
                </p>

                <section className={styles.mainForm}>
                  <div
                    onClick={() => setIsActive(!isActive)}
                    className={`${styles.mainCard} ${isActive && styles.active}`}>
                    <input type="checkbox" className={styles.checkBox} />
                    <label htmlFor="" className={styles.checkLabel}></label>


                    <img className={styles.img1} src="https://www.wishket.com/static/renewal/img/project/submit/task_disabled.svg" alt="" />
                    <img className={styles.img2} src="https://www.wishket.com/static/renewal/img/project/submit/task_enabled_client.svg" alt="" />

                    <p className={styles.cardTitle}>리폼 의뢰</p>
                    <p className={styles.cardContent}>
                      가구 리폼을 의뢰하고 싶습니다<br />
                      <span className={styles.cardSubContent}>예)100만원으로 가죽소파 리폼의뢰</span>
                    </p>

                  </div>
                </section>

                <div className={styles.buttons}>
                  <button className={styles.prevBtn} onClick={() => setStep(step - (step <= 0 ? 0 : 1))}>이전</button>
                  <button className={styles.nextBtn} onClick={() => setStep(step + (step >= 2 ? 0 : 1))}>다음</button>
                </div>

              </div>
            </div>
          }

          {/* Step1 끝*/}

          {/* Step2 시작*/}
          {
            step == 1 &&

            <div className={styles.right}>
              <div className={styles.formWrapper}>
                <p className={styles.mainTitle}>
                  리폼가구 등록
                </p>

                <section className={styles.formSection}>
                  {/* Step2 폼 아이템 시작*/}
                  <div className={styles.formItem}>
                    <p className={styles.itemTitle}>리폼이미지(0/10)</p>
                    <p className={styles.itemSupportTitle}>리폼할 가구 이미지를 등록하세요</p>

                    <div className={styles.itemContent}>
                      <div className={styles.imageWrapper}>
                        <div className={styles.uploadFile}>
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAFQElEQVR4AeyZXWgcVRTHZ3djwEStSKwkzbKbTQJpgl9lxRalSRFaiUKxCPpgaRWJigiKUEEf3AfBD8TiW2uDmqhgi0KrWC0oLRWtVgz1YU1DNptN1kg/SNOWNi1pku3vLLOlXe6dj51JupQN598zc+85557/vefO3J0GjRvsr0Ko3Be0skKVFVrkGViwkstkMqtGR0e3gIQK6XR640Jw9Z3Q+Ph4AwSO5HK530n4ffC2CoFAoB+7w2JPv2/iKyFmPTI3NzdAdvcCJ/IA9r8MDw/f5sTYiY1vhJLJ5C3M+l4GvQu4kbaqqqrdrGjIjZPO1hdCJBOsqan5hkHaQSmyZmxsbFspjsU+vhBiL3xA4HWgZGFSnudB8nLJAUxHz4TYN89Qaq+b8TwpSH0MqTVegrgiRPJrWY03wOdgPzgAmS+8JFDkG4LUHonLWD+jt4NXR0ZG4kV22ltHhKjvdgL/Q/L7iPQe2AS6QCfwW24lYCdjPYLuAVuDweBfjP8txJZwbym2hAgSn5+fP0SUe8D1lA0QOwSx262SsCQkzgTZTQDf3hPE8iLLcf4KaMWSEPX8Dp7LgCehfP4jwB/gGPAq3Tw4NuiCaAmZL0ovj9E/GfQ5VviOaDQabmpqWgXqZ2dnl9L+EhgEJQkT/YrOMajrqK2tXa3rs2mfYsD1JL8SfBaJRKaY0XrKty2VSi1tbW09Sfs20I6dbHqbcMrurmw2e7OqR0uIB0GDysGm7Qz9K2Kx2Hdog0fvWxBJkfj/3A+GQqHjkEvS9hr3BnY7KMeH5NotZmZmWlQ+WkIYK2eAdivZxMxnhoaGlpH0AMnKHmy+2gFycjz6iP6fpKwpRzmVv3m1jZNrJqdOZaclRDIBlYNF24+Q2SP91dXV36PvB1ayjrLeKQaTk5MfokeBG1HmpyXETObcRMc+IfZSZmg7MpgYBj7drNSL8Xj8Etfyws63O/xHmZ+WkMOgBbM0++Gw3LCyz4p2gc1ii98u0V6hJcQAyiXVDHhU2tnw9ehr9gz3dvIgq1NFuZ7GMA2cijI/LSGnUU27s6JJzPasJXbFmJiYKPhli/vc3vtCCCJ3ysD8nD4l2i16e3unTB/lk8vsc6S0hEhSuelUUSlPOWMZLS0tJ7j+V2Vj0XYwkUjMm/1NpnaiciojLSESU9aoKghtDZzK70bLk6tXtAt8Krbsv250DXAqyvy0hJxGLdhxZsuf+9jcW2mT300oW9mJfZ9YURHa85n0O4VvhBjwBd4p96GN6enpJ9HyBQilFSHztPSyuo+jHwWeRUuIGVPWqM2IezmAhjs6Os4x849hK6dqOXVzeUUOcrWZ/jwZSm0Fq/s1bW5FmZ+WkNvopn0939gGSFL2g0HScqpeGY1Gb+Kvrq+vL0RbJ8iXGaeKHibub3xrgS9iRehiKSOQYB34gfLbT8JrJQYPmNnGxsbJwtOM9o30J2nfLv2lgDEuqPy0hCiDCZWDi7YuEt5H4oPgQAGsXpb2fuLIqRtVmlAJypewlhAvyd8YSlmntLuRNozl61AezGwj914lEw6HlROuJdTc3Cw/1vI/B7yOvgD+n+hiagmJA79at4guM4zwUHlXl5MlIVZpmBKRj4qGLsAit59nb6+3GtOSkDjGYrF+SMn/tuVP1NJ2PcCDJMW4D/PRJYnWii0h8YTUlyzzEog9xb18eBxHL4YchcgOxl3Nu6yVHI7YDeqIUCEIxHYR9AkQAYFFwHKI9DDur4Uc7LQrQnbByqG/QqgcVsEqh8oKWc1OOfRVVqgcVsEqh8oKWc1OOfRdBgAA//+9xS0GAAAABklEQVQDAHhw93hJOwU5AAAAAElFTkSuQmCC" alt="" />
                        </div>

                        <div className={styles.uploadImageList}>
                          <ul>
                            <li className={styles.uploadImageItem}>
                              <button className={styles.cancelBtn} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* Step2 폼 아이템 끝*/}

                  {/* Step2 폼 아이템 시작*/}
                  <div className={styles.formItem}>
                    <p className={styles.itemTitle}>상세 리폼 내용</p>
                    <div className={styles.itemContent}>
                      <div className={`${styles.textAreaBorder} ${styles.active}`}>
                        <textarea maxLength={5000} name="" id="" rows={15} className={styles.itemTextArea} />
                      </div>
                    </div>
                    <div className={styles.textAreaGuide}>
                      <span>5,000자 이내로 작성해주세요</span>
                      <span>25 / 5000</span>
                    </div>
                  </div>
                  {/* Step2 폼 아이템 끝*/}

                  {/* Step2 폼 아이템 시작*/}
                  <div className={styles.formItem}>
                    <p className={styles.itemTitle}>카테고리</p>
                    <p className={styles.itemSupportTitle}>해당하는 카테고리를 선택해주세요</p>


                    <div className={styles.itemContent}>
                      <ul className={styles.categoryWrapper}>
                        {
                          categoryList.map((item, idx) => {
                            return (
                              <li
                                key={item?.title || idx}
                                onClick={() => changeActiveCategory(idx)}
                              >
                                <div
                                  className={`${styles.categoryItem} ${item.selected && styles.selectedCategory}`}
                                >
                                  {
                                    item.selected ?
                                      <img src={item.imgSrc} />
                                      :
                                      <img src="https://www.wishket.com/static/renewal/img/component/category_chip/chip_icon_web_gray.svg" alt="" />
                                  }


                                  <span>{item.title}</span>
                                  {
                                    item.selected ?
                                      <img src="https://www.wishket.com/static/renewal/img/component/category_chip/icon_check_checked.svg" alt="" />
                                      :
                                      <img src="https://www.wishket.com/static/renewal/img/component/category_chip/icon_check_w.svg" alt="" />
                                  }

                                </div>
                              </li>
                            )
                          })
                        }
                      </ul>

                    </div>


                  </div>
                  {/* Step2 폼 아이템 끝*/}

                </section>

                <div className={styles.buttons}>
                  <button className={styles.prevBtn} onClick={() => setStep(step - (step <= 0 ? 0 : 1))}>이전</button>
                  <button className={styles.nextBtn} onClick={() => setStep(step + (step >= 2 ? 0 : 1))}>다음</button>
                </div>

              </div>
            </div>
          }
          {/* Step2 끝*/}







          {/* Step3 시작*/}
          {
            step == 2 &&
            <div className={styles.right}>
              <div className={styles.formWrapper}>
                <p className={styles.mainTitle}>
                  예산 및 일정
                </p>

                <section className={styles.formSection}>
                  {/* Step3 폼 아이템 시작*/}
                  <div className={styles.formItem}>
                    <p className={styles.itemTitle}>지출 가능 예산</p>
                    <div className={styles.itemContent}>
                      <div className={styles.drawWrapper}>
                        <input type="text" className={styles.drawInput} />
                        <img className={styles.drawImage} src="	https://www.wishket.com/static/renewal/img/project/submit/input_icon_won.png" alt="" />
                      </div>
                    </div>
                    <div className={styles.supportContent}>
                      <p>예상 결제 금액 :2,310,000,000 (부가가치세 10% 포함)</p>
                    </div>
                  </div>
                  {/* Step3 폼 아이템 끝*/}

                  {/* Step3 폼 아이템 시작*/}
                  <div className={styles.formItem}>
                    <p className={styles.itemTitle}>리폼 희망 시작일</p>
                    <div className={styles.itemContent}>
                      <div className={styles.drawWrapper}>
                        <img className={styles.drawPickerImg} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABv0lEQVR4AeSVTStFQRjHx/tLynteSpRCRMTKytJG2VrZ+w6SsvApZCEfwBewsJIUZSuRlPIW8pr4/V1zusd5zj3XyV3d2/8388zMM/Oc88ycuaWuwL/iCLBLFivA0g6dtRCrfFI0zOxKsDRIZ6oAM0zcg3eogUf4NGii7xIOYR4ist5gCq8tmIBySJLWGMFpHeYgJA2GOmisQFot/Z5oBRjDqRpKUtDMnAYIZAXQhirfgdMfjA98tWdUGVkBMiP/VCYFOCLOKXi/A+xzqAJpn+IC6sCUn2gO0tkCbaC0UTm12zF8W8e0I6uNGVZSgB7ctegLtdRL0QgPIPVT1MMNmEoKoIX1kfnJrxh+cUz3RnEPsUoKoJwfM1tHlsop5ycYPkW6p85ox14XSQE6mdwN+i6onPKttGW3uxgIHU3agawASot/QuW8Fe9nkPoo9DH5tAzQ1h5dU0s6Xd5XbWcFUBomv0edU75vf2xV2o/sDX2i0y8+hH0FdxDICrDM6BrMgk8FZqz0XzHNqC7IvO6ibZwXYBH0Bro2cqGUruKrxTepQ7LeQA56mnEMPZ1OUC7K8BuFDYgoLkDEMW1HwQN8AQAA///8gTu4AAAABklEQVQDAL4bRzG1WseuAAAAAElFTkSuQmCC" alt="" />
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={styles.datepicker} />
                      </div>
                    </div>

                  </div>
                  {/* Step3 폼 아이템 끝*/}

                  {/* Step3 폼 아이템 시작*/}
                  <div className={styles.formItem}>
                    <p className={styles.itemTitle}>희망 진행 기간</p>
                    <p className={styles.itemSupportTitle}>희망하시는 진행기간을 입력해 주세요.</p>

                    <div className={styles.itemContent}>
                      <div className={styles.durationWrapper}>
                        <input type="text" className={styles.wishDuration} />
                        <span className={styles.wishDurationDay}>일</span>

                      </div>
                    </div>

                  </div>
                  {/* Step3 폼 아이템 끝*/}


                </section>

                <div className={styles.buttons}>
                  <button className={styles.prevBtn} onClick={() => setStep(step - (step <= 0 ? 0 : 1))}>이전</button>
                  <button className={styles.nextBtn} onClick={() => setStep(step + (step >= 2 ? 0 : 1))}>
                    {
                      step == 2 ?
                        '제출'
                        : '다음'
                    }
                  </button>

                </div>

              </div>
            </div>
          }

          {/* Step3 끝*/}





        </div>
      </C_1280>
    </div>
  )
}