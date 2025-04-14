import StaticBox from "../../components/staticBox/StaticBox";
import "./Home.css";
import React, { useEffect, useState } from "react";
import SimplePieChart from "../simplepie/Pie.jsx";
import Schedule from "../../components/Schedule/Schedule.jsx";
import { BarChart } from "recharts";
import FinanceLine from "../FinanceLine/FinanceLine";
import Paynet from "../Payment/Pay.jsx";
import axios from "axios";

const Home = () => {


  return (
    <div className="Home" style={{ overflowY: "auto" }}>
      <StaticBox />
      <div className="FinanceBox">
        <div className="PaymentBox">
          <div className="PaymentBoxTitle">
            <p>Payment status</p>
          </div>
          <div className="PaynetBla">
            <Paynet />
          </div>
        </div>
        <div className="FinanceChartBox">
          <p>Monthly financial indicators</p>
          <FinanceLine />
        </div>
        <div className="FinanceCategorys">
          <div className="FinanceCategory">
            <div className="FinanceCategoryPie">
              <SimplePieChart
                value={67}
                color1={"#F7685B"}
                color2={"#FEEEED"}
                fontSize={12}
              />
            </div>
            <div className="FinanceCategoryText">
              <p className="FinanceCategoryText_title">In this month</p>
              <h2>
                255 000 000 <span>so'm</span>
              </h2>
              <div className="FinanceCategoryText_info">
                <div className="FinanceCategoryText_info_chil">
                  <button style={{ background: "#FEEEED" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1322_799)">
                        <path
                          d="M7.1393 11.6673H3.17264C2.51924 11.6673 2.19254 11.6673 1.94298 11.5402C1.72346 11.4283 1.54498 11.2498 1.43313 11.0303C1.30597 10.7807 1.30597 10.454 1.30597 9.80065V4.20065C1.30597 3.54726 1.30597 3.22056 1.43313 2.971C1.54498 2.75147 1.72346 2.573 1.94298 2.46114C2.19254 2.33398 2.51924 2.33398 3.17264 2.33398H3.40597C4.71276 2.33398 5.36615 2.33398 5.86528 2.5883C6.30433 2.81201 6.66128 3.16896 6.88498 3.60801C7.1393 4.10713 7.1393 4.76053 7.1393 6.06732M7.1393 11.6673V6.06732M7.1393 11.6673H11.106C11.7594 11.6673 12.0861 11.6673 12.3356 11.5402C12.5551 11.4283 12.7336 11.2498 12.8455 11.0303C12.9726 10.7807 12.9726 10.454 12.9726 9.80065V4.20065C12.9726 3.54726 12.9726 3.22056 12.8455 2.971C12.7336 2.75147 12.5551 2.573 12.3356 2.46114C12.0861 2.33398 11.7594 2.33398 11.106 2.33398H10.8726C9.56585 2.33398 8.91245 2.33398 8.41333 2.5883C7.97428 2.81201 7.61733 3.16896 7.39362 3.60801C7.1393 4.10713 7.1393 4.76053 7.1393 6.06732"
                          stroke="#F7685B"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1322_799">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.139282)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <p>General English</p>
                </div>
                <div className="FinanceCategoryText_info_chil">
                  <button style={{ background: "#FEEEED" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1322_804)">
                        <path
                          d="M3.05597 5.83341V9.33991C3.05597 9.54931 3.05597 9.654 3.08785 9.74643C3.11605 9.82817 3.16206 9.90262 3.22256 9.9644C3.29097 10.0342 3.38462 10.0811 3.5719 10.1747L6.7219 11.7497C6.87494 11.8262 6.95147 11.8645 7.03174 11.8796C7.10283 11.8929 7.17578 11.8929 7.24687 11.8796C7.32713 11.8645 7.40366 11.8262 7.5567 11.7497L10.7067 10.1747C10.894 10.0811 10.9876 10.0342 11.056 9.9644C11.1165 9.90262 11.1626 9.82817 11.1908 9.74643C11.2226 9.654 11.2226 9.54931 11.2226 9.33991V5.83341M1.30597 4.95841L6.9306 2.1461C7.00713 2.10783 7.04539 2.0887 7.08552 2.08117C7.12107 2.0745 7.15754 2.0745 7.19309 2.08117C7.23322 2.0887 7.27148 2.10783 7.348 2.1461L12.9726 4.95841L7.348 7.77073C7.27148 7.80899 7.23322 7.82812 7.19309 7.83565C7.15754 7.84232 7.12107 7.84232 7.08552 7.83565C7.04539 7.82812 7.00713 7.80899 6.9306 7.77073L1.30597 4.95841Z"
                          stroke="#F7685B"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1322_804">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.139282)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <p>1255</p>
                </div>
              </div>
            </div>
          </div>
          <div className="FinanceCategory">
            <div className="FinanceCategoryPie">
              <SimplePieChart
                value={35}
                color1={"#2ED47A"}
                color2={"#E8FAF0"}
                fontSize={12}
              />
            </div>
            <div className="FinanceCategoryText">
              <p className="FinanceCategoryText_title">In this month</p>
              <h2>
                218 000 000 <span>so'm</span>
              </h2>
              <div className="FinanceCategoryText_info">
                <div className="FinanceCategoryText_info_chil">
                  <button style={{ background: "#E8FAF0" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1322_829)">
                        <path
                          d="M7.1393 11.6673H3.17264C2.51924 11.6673 2.19254 11.6673 1.94298 11.5402C1.72346 11.4283 1.54498 11.2498 1.43313 11.0303C1.30597 10.7807 1.30597 10.454 1.30597 9.80065V4.20065C1.30597 3.54726 1.30597 3.22056 1.43313 2.971C1.54498 2.75147 1.72346 2.573 1.94298 2.46114C2.19254 2.33398 2.51924 2.33398 3.17264 2.33398H3.40597C4.71276 2.33398 5.36615 2.33398 5.86528 2.5883C6.30433 2.81201 6.66128 3.16896 6.88498 3.60801C7.1393 4.10713 7.1393 4.76053 7.1393 6.06732M7.1393 11.6673V6.06732M7.1393 11.6673H11.106C11.7594 11.6673 12.0861 11.6673 12.3356 11.5402C12.5551 11.4283 12.7336 11.2498 12.8455 11.0303C12.9726 10.7807 12.9726 10.454 12.9726 9.80065V4.20065C12.9726 3.54726 12.9726 3.22056 12.8455 2.971C12.7336 2.75147 12.5551 2.573 12.3356 2.46114C12.0861 2.33398 11.7594 2.33398 11.106 2.33398H10.8726C9.56585 2.33398 8.91245 2.33398 8.41333 2.5883C7.97428 2.81201 7.61733 3.16896 7.39362 3.60801C7.1393 4.10713 7.1393 4.76053 7.1393 6.06732"
                          stroke="#2ED47A"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1322_829">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.139282)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <p>General English</p>
                </div>
                <div className="FinanceCategoryText_info_chil">
                  <button style={{ background: "#E8FAF0" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1322_834)">
                        <path
                          d="M3.05597 5.83341V9.33991C3.05597 9.54931 3.05597 9.654 3.08785 9.74643C3.11605 9.82817 3.16206 9.90262 3.22256 9.9644C3.29097 10.0342 3.38462 10.0811 3.5719 10.1747L6.7219 11.7497C6.87494 11.8262 6.95147 11.8645 7.03174 11.8796C7.10283 11.8929 7.17578 11.8929 7.24687 11.8796C7.32713 11.8645 7.40366 11.8262 7.5567 11.7497L10.7067 10.1747C10.894 10.0811 10.9876 10.0342 11.056 9.9644C11.1165 9.90262 11.1626 9.82817 11.1908 9.74643C11.2226 9.654 11.2226 9.54931 11.2226 9.33991V5.83341M1.30597 4.95841L6.9306 2.1461C7.00713 2.10783 7.04539 2.0887 7.08552 2.08117C7.12107 2.0745 7.15754 2.0745 7.19309 2.08117C7.23322 2.0887 7.27148 2.10783 7.348 2.1461L12.9726 4.95841L7.348 7.77073C7.27148 7.80899 7.23322 7.82812 7.19309 7.83565C7.15754 7.84232 7.12107 7.84232 7.08552 7.83565C7.04539 7.82812 7.00713 7.80899 6.9306 7.77073L1.30597 4.95841Z"
                          stroke="#2ED47A"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1322_834">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.139282)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <p>1255</p>
                </div>
              </div>
            </div>
          </div>
          <div className="FinanceCategory">
            <div className="FinanceCategoryPie">
              <SimplePieChart
                value={21}
                color1={"#FFB946"}
                color2={"#FFF7EA"}
                fontSize={12}
              />
            </div>
            <div className="FinanceCategoryText">
              <p className="FinanceCategoryText_title">In this month</p>
              <h2>
                156 000 000 <span>so'm</span>
              </h2>
              <div className="FinanceCategoryText_info">
                <div className="FinanceCategoryText_info_chil">
                  <button style={{ background: "#FFF7EA" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1322_859)">
                        <path
                          d="M7.1393 11.6673H3.17264C2.51924 11.6673 2.19254 11.6673 1.94298 11.5402C1.72346 11.4283 1.54498 11.2498 1.43313 11.0303C1.30597 10.7807 1.30597 10.454 1.30597 9.80065V4.20065C1.30597 3.54726 1.30597 3.22056 1.43313 2.971C1.54498 2.75147 1.72346 2.573 1.94298 2.46114C2.19254 2.33398 2.51924 2.33398 3.17264 2.33398H3.40597C4.71276 2.33398 5.36615 2.33398 5.86528 2.5883C6.30433 2.81201 6.66128 3.16896 6.88498 3.60801C7.1393 4.10713 7.1393 4.76053 7.1393 6.06732M7.1393 11.6673V6.06732M7.1393 11.6673H11.106C11.7594 11.6673 12.0861 11.6673 12.3356 11.5402C12.5551 11.4283 12.7336 11.2498 12.8455 11.0303C12.9726 10.7807 12.9726 10.454 12.9726 9.80065V4.20065C12.9726 3.54726 12.9726 3.22056 12.8455 2.971C12.7336 2.75147 12.5551 2.573 12.3356 2.46114C12.0861 2.33398 11.7594 2.33398 11.106 2.33398H10.8726C9.56585 2.33398 8.91245 2.33398 8.41333 2.5883C7.97428 2.81201 7.61733 3.16896 7.39362 3.60801C7.1393 4.10713 7.1393 4.76053 7.1393 6.06732"
                          stroke="#FFB946"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1322_859">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.139282)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <p>General English</p>
                </div>
                <div className="FinanceCategoryText_info_chil">
                  <button style={{ background: "#FFF7EA" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1322_864)">
                        <path
                          d="M3.05597 5.83341V9.33991C3.05597 9.54931 3.05597 9.654 3.08785 9.74643C3.11605 9.82817 3.16206 9.90262 3.22256 9.9644C3.29097 10.0342 3.38462 10.0811 3.5719 10.1747L6.7219 11.7497C6.87494 11.8262 6.95147 11.8645 7.03174 11.8796C7.10283 11.8929 7.17578 11.8929 7.24687 11.8796C7.32713 11.8645 7.40366 11.8262 7.5567 11.7497L10.7067 10.1747C10.894 10.0811 10.9876 10.0342 11.056 9.9644C11.1165 9.90262 11.1626 9.82817 11.1908 9.74643C11.2226 9.654 11.2226 9.54931 11.2226 9.33991V5.83341M1.30597 4.95841L6.9306 2.1461C7.00713 2.10783 7.04539 2.0887 7.08552 2.08117C7.12107 2.0745 7.15754 2.0745 7.19309 2.08117C7.23322 2.0887 7.27148 2.10783 7.348 2.1461L12.9726 4.95841L7.348 7.77073C7.27148 7.80899 7.23322 7.82812 7.19309 7.83565C7.15754 7.84232 7.12107 7.84232 7.08552 7.83565C7.04539 7.82812 7.00713 7.80899 6.9306 7.77073L1.30597 4.95841Z"
                          stroke="#FFB946"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1322_864">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.139282)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <p>1255</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  );
};

export default Home;
