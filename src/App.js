import React from 'react';
import CryptoJS from 'crypto-js';
import './App.css';



class App extends React.Component {
	// constructor(props) {
  //   super(props)
  //   this.state = {
  //     title: '',
  //     company: '',
  //     salary_range: '',
  //     description: '',
  //     link: '',
  //     redirect: false,
  //   };
  // };

  // titleChange = (t) => {
  //   t.preventDefault();
  //   this.setState({
  //     title: t.target.value,
  //   });
  // };

  // companyChange = (c) => {
  //   c.preventDefault();
  //   this.setState({
  //     company: c.target.value,
  //   });
  // };

  // salaryChange = (s) => {
  //   s.preventDefault();
  //   this.setState({
  //     salary_range: s.target.value,
  //   });
  // };

  // descriptionChange = (d) => {
  //   d.preventDefault();
  //   this.setState({
  //     description: d.target.value,
  //   });
  // };

  // linkChange = (l) => {
  //   l.preventDefault();
  //   this.setState({
  //     link: l.target.value,
  //   });
  // };

  // handleOnSubmit = submit => {
  //   submit.preventDefault();
  //   const { account_name, email} = submit.target
  //   const jobs = {
  //     account_name: account_name.value,
  //     email: email.value,
  //     // salary_range: salary_range.value,
  //     // description: description.value,
  //     // link: link.value,
  //   };
	// 	console.log(JSON.stringify(jobs))
  //   const url = 'http://localhost:5000/webportal/test';

  //   fetch(url, {
  //     method: 'POST',
  //     body: JSON.stringify(jobs),
  //     headers: {
	// 			'content-type': 'application/json',
  //     }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         return res.json().then(error => Promise.reject(error));
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
	// 			console.log(data)
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         error: {err},
  //       });
  //     });

  displayDecodedEncrytption = () => {
    let encryption = 'LM2BLvbTBiuRt5Zw9/Z92SSPZSyrZnQhmdp8EqP8CJo='

    // let decrypted = CryptoJS.AES.decrypt(encryption, 'secretKey').toString(CryptoJS.enc.Utf8)

    // console.log(decrypted.toString(CryptoJS.enc.Utf8))

    // let encryptedData = CryptoJS.AES.encrypt('blah blah blah', 'secretKey')
    // console.log(encryptedData)
    // console.log(encryptedData.toString())


    ;
    let decryptedData = CryptoJS.AES.decrypt(encryption.toString(), 'secretKey')
    console.log(decryptedData)
    let decryptedBase = CryptoJS.enc.Base64.parse(decryptedData)
    console.log(decryptedBase)
    let stringDecryptedData = JSON.stringify(decryptedBase).toString(CryptoJS.enc.Base64)
    console.log(stringDecryptedData)

    return true
  }
  // }

  render() {
    this.displayDecodedEncrytption()
    return (
      <div className="uploadJob">

        hey

        {/* <h1>Python Form Example</h1>
        <form className="uploadForm" onSubmit={e => this.handleOnSubmit(e)}>
          <label htmlFor="title" >
            Name: 
          </label>
            <input 
              type="text" 
              className="input" 
              id="accoutn_name" name="account_name" 
              onChange={t => this.titleChange(t)} 
              value={this.state.title} 
              required 
            />
          <label htmlFor="company">
            Email Address:
          </label>
            <input 
              type="text" 
              className="input" 
              id="email" 
              name="email" 
              onChange={c => this.companyChange(c)} 
              value={this.state.company} 
              required 
            />
          <label htmlFor="salary_range">
            Salary Range:          
          </label>
          {/* <input 
            type="text" 
            className="input" 
            id="phoneNumber" 
            name="salary_range" 
            onChange={s => this.salaryChange(s)} 
            value={this.state.salary_range} 
          />
          <label htmlFor="description">
            Job Description:   
          </label>
          <textarea 
            className="textarea" 
            id="description" 
            name="description" 
            onChange={d => this.descriptionChange(d)} 
            value={this.state.description} 
            required 
          />
          <label htmlFor="link">
            Application Link:           
          </label>
          <input 
            type="url" 
            className="input" 
            name="link" 
            onChange={l => this.linkChange(l)} 
            value={this.state.link} 
            required 
          /> */}
          {/* <div className="buttons">
            <button type="submit" className="submit">Upload Job!</button>
            <button type="reset" className="clearForm">Cancel</button>
          </div>
        </form> */} 
      </div>
    );
  };
};

export default App;
