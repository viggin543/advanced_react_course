import React from 'react';
import {FormGroup,ControlLabel,FormControl,Button,HelpBlock} from 'react-bootstrap';

class ArticleForm extends React.PureComponent {
  state ={
    value: '',
    apibaseRoute : 'https://pd2cwpoovh.execute-api.us-east-2.amazonaws.com/latest/'
  }

  render() {
    return (
      <form
        action="article" 
        method="post" 
        onSubmit={this.onFormSubmit}>
        <FormGroup>
          <ControlLabel>title</ControlLabel>  
          <FormControl
            componentClass="textarea"
            name="title"
            placeholder="give me a title"
            required
          />
        </FormGroup>
        <FormGroup 
          controlId="formControlsTextarea"
          validationState={this.getValidationState()}>
          <ControlLabel>whats on your mind ?</ControlLabel>
          <FormControl 
            componentClass="textarea"
            placeholder="10 characters at least..." 
            name="body"
            value={this.state.value}
            onChange={this.handleChange}
            rows="5"
            required
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <Button type="submit" >
          Submit
        </Button>
        <Button  onClick={this.onTestApiGetway('banana')} >
          fetch/banana
        </Button>
        <Button  onClick={this.onTestApiGetway('tapuz')} >
          fetch/tapuz
        </Button>
      </form>
    );
  }

  onTestApiGetway = (endpoint) => async () => {
    const res = await fetch(
      `${this.state.apibaseRoute}${endpoint}`,
      { mode: 'cors' });
    alert(JSON.stringify(await res.json()));
  }


  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(e.target)
    });
    e.target.reset();
    this.setState({value: ''});
  }
}
export default ArticleForm;