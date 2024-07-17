import React from "react";
import "./Pricing.css";
import { FaCheck, FaTimes, FaRegQuestionCircle } from "react-icons/fa";
import { ReactComponent as FreePlan } from "../../assets/images/free_plan.svg";
import { ReactComponent as PersonalPlan } from "../../assets/images/personal_plan.svg";
import { ReactComponent as ProPlan } from "../../assets/images/pro_plan.svg";

const Pricing = () => {
  return (
    <div>
      <table className="price-table">
        <tbody>
          <tr>
            <td className="price-blank"></td>
            <td className="price-blank"></td>
            <td className="price-table-popular">Most Popular</td>
            <td className="price-blank"></td>
          </tr>
          <tr className="price-table-head">
            <td></td>
            <td>
              Free Plan
              <br />
              <small style={{ fontSize: "12px", fontWeight: "400" }}>
                Starter plan with basic resources
              </small>
            </td>
            <td>
              Personal Plan
              <br />
              <small style={{ fontSize: "12px", fontWeight: "400" }}>
                Longer access to interview resources
              </small>
            </td>
            <td className="green-width">
              Pro Plan
              <br />
              <small style={{ fontSize: "12px", fontWeight: "400" }}>
                Comprehensive career preparation
              </small>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="price">
              <FreePlan />
              <br />
              Free
              <br />
              {/* <a href="#">Get Started</a> */}
            </td>
            <td className="price">
              <PersonalPlan />
              <br />
              ₹69/month
              <br />
              {/* <a href="#">Get Started</a> */}
            </td>
            <td className="price">
              <ProPlan />
              <br />
              ₹239/month
              <br />
              {/* <a href="#">Get Started</a> */}
            </td>
          </tr>
          <tr>
            <td>
              <a href="#interview-questions" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Interview Questions
            </td>
            <td>Basic</td>
            <td>Extended</td>
            <td>Comprehensive</td>
          </tr>
          <tr>
            <td>
              <a href="#mock-interviews" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Mock Interviews
            </td>
            <td>Basic</td>
            <td>Extended</td>
            <td>Comprehensive</td>
          </tr>
          <tr>
            <td>
              <a href="#career-advice" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Career Advice
            </td>
            <td>Basic</td>
            <td>Extended</td>
            <td>Comprehensive</td>
          </tr>
          <tr>
            <td>
              <a href="#resume-building" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Resume Building
            </td>
            <td>Basic</td>
            <td>Extended</td>
            <td>Comprehensive</td>
          </tr>
          <tr>
            <td>
              <a href="#networking-tips" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Networking Tips
            </td>
            <td>Basic</td>
            <td>Extended</td>
            <td>Comprehensive</td>
          </tr>
          <tr>
            <td>
              <a href="#job-search-strategies" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Job Search Strategies
            </td>
            <td>Basic</td>
            <td>Extended</td>
            <td>Comprehensive</td>
          </tr>
          <tr>
            <td>
              <a href="#premium-support" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Premium Support
            </td>
            <td>
              <FaTimes />
            </td>
            <td>
              <FaTimes />
            </td>
            <td>
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td>
              <a href="#billing-options" className="price-table-help">
                <FaRegQuestionCircle />
              </a>{" "}
              Flexible Billing Options
            </td>
            <td>
              <FaCheck />
            </td>
            <td>
              <FaCheck />
            </td>
            <td>
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="price">
              <a href="#">Get Started</a>
            </td>
            <td className="price">
              <a href="#">Get Started</a>
            </td>
            <td className="price">
              <a href="#">Get Started</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
