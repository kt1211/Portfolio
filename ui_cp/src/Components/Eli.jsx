import React from 'react';
import './Menu.css'; 

import Remenu from './Remenu';

function Eli() {
  return (
    <div>
     
    <Remenu/><br />
  <br />
  
  <div className="Abovetable"><h2>Regulation 5: Eligibility criteria for prospective adoptive parents
    </h2>
    <ul><li>Prospective adoptive parents must be physically, mentally, emotionally, and financially capable.</li>
      <li>They should not have any life-threatening medical conditions.</li>
      <li>They should not have been convicted of any criminal acts or accused of child rights violations.</li>
      <li>Marital status and whether they have biological children do not affect eligibility for adoption.</li>
      <li>In the case of a married couple, both spouses must consent to the adoption.</li>
      <li>A single female can adopt a child of any gender.</li>
      <li>A single male cannot adopt a girl child.</li>
      <li>Couples must have at least two years of stable marital relationship, except in cases of relative or step-parent adoption, to be eligible for adoption.</li>
      <li>The age of prospective adoptive parents at the time of registration determines their eligibility for children of different age groups.</li></ul>
  </div> 
  <section><br />
    <br />
    <br />
    <table>
      <tbody><tr>
          <th>Age of the child</th>
          <th>Maximum age of prospective adoptive parents (couple)</th>
          <th>Maximum age of single prospective adoptive parent</th>
        </tr>
        <tr>
          <td>Upto 2 years</td>
          <td>85 years</td>
          <td>25 years</td>
        </tr>
        <tr>
          <td>Above 2 and Upto 4 years</td>
          <td>90 years</td>
          <td>45 years</td>
        </tr>
        <tr>
          <td>Above 4 and upto 8 years</td>
          <td>100 years</td>
          <td>50 years</td>
        </tr>
        <tr>
          <td>Above 8 and upto 18 years</td>
          <td>110 years</td>
          <td>55</td>
        </tr>
      </tbody></table>
    <br /> <br />
    <div className="belowtable"><ul>
        <li>The minimum age difference between the child and either of the prospective adoptive parents must be at least twenty-five years.</li>
        <li>For couples, the composite age of both prospective adoptive parents is considered.</li>
        <li>The age criteria for prospective adoptive parents do not apply to relative adoptions and adoptions by step-parents.</li>
        <li> Couples with two or more children are only considered for special needs children and hard-to-place children, unless they are relatives or step-children.</li>
        <li>Prospective adoptive parents need to revalidate their Home study report every three years.</li>
        <li>The seniority of prospective adoptive parents who have not received a referral within three years is counted from their date of registration, except for those who are over one hundred ten years old in total.</li>
      </ul>
    </div>
  </section><br />
  {/* <Footer/> */}
  </div>

  )
}

export default Eli
