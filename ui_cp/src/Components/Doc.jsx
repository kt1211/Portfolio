import React from 'react';
import './Menu.css'; 
import Remenu from './Remenu';

function Doc() {
  return (
    <div>
    
    <Remenu/><br />
      <div class="Doc1">
        <h2>DOCUMENTS TO BE UPLOADED AT THE TIME OF REGISTRATION (SCHEDULE VI)</h2>
        <br/>
        <ol>
            <li>Current family photograph/ photograph of person adopting a child</li>
            <li>Aadhar Card or Passport or Voter card or Driving License of the prospective adoptive parents or Birth Certificate or Overseas Citizen of India card of the prospective adoptive parents (if applicable) and PAN Card (if applicable).</li>
            <li>Proof of residence (Aadhar card/ voter card/ passport/ current electricity bill/ telephone bill)</li>
            <li>Proof of income of last year (salary slip/ income certificate issued by Govt. department/ income tax return)</li>
            <li>Certificate from a medical practitioner certifying that the prospective adoptive parents do not suffer from any chronic, contagious or fatal disease and they are fit to adopt (In the event of a married couple, upload the applicant’s respective medical certificate)</li>
            <li>Marriage certificate/Divorce Decree/Declaration from the competent court or affidavit on oath pertaining to divorce in case of divorce governed by personal law where decree of divorce is not mandatory/Death certificate of spouse whichever is applicable.</li>
            <li>Undertaking from the relative in case single prospective adoption parents (if applicable).</li>
            <li>Consent of the older child/children in the adoptive family</li>
          </ol>
          
      </div>
      <br /><br />
      
    </div>
  )
}

export default Doc
