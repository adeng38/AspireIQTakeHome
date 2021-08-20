import React from 'react';
import './Email.css';

class Email extends React.Component {
    constructor(props) {
        super(props);
        // Had difficulty working with binding Array functions to state, so made a tempSelected to setState selected
        this.tempSelected = [];
        // State keeps track of current input value, selected emails, and like dropdown options
        this.state = {
            value: '',
            selected: [],
            dropdown: []
        };
        // Event binding
        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChange(event) {
        // Mock API call, obtaining the emails list from emails.js
        const {excel} = this.props;
        const val = event.target.value;
        // Temporary dropdown to setState
        let drop = [];
        // If the user typed something in input, populate the dropdown
        if(val.length > 0) {
        // Initially I had the filter look for all instances of val in emails, but that seemed less practical
            drop = excel.sort().filter(email => email.startsWith(val));
        }
        this.setState(() => ({
            value: val,
            dropdown: drop
        }));
    }

    // Trigger Enter or Tab key to submit
    onKeyDown(event) {
        if (event.key === 'Enter' || event.key === 'Tab') {
            this.onSelect(this.state.value);
        }
    }

    // ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$ Email validation is credited to w3schools
    onValid(val) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
            return true;
        }
        return false;
    }

    // Upon selecting a dropdown, or pressing Enter/Tab, save the email to the selected array
    onSelect(val) {
        if(this.state.selected.indexOf(val) < 0){
            this.tempSelected.push(val);
            this.setState(() => ({
                value: '',
                selected: this.tempSelected,
                dropdown: []
            }));
        }
        else {
            alert(val + " is already a recipient.")
        }
    }

    onDelete(val) {
        const index = this.state.selected.indexOf(val);
        if(index > -1){
            this.tempSelected.splice(index, 1);
            this.setState(() => ({
                selected: this.tempSelected
            }));
        }
    }

    renderSelected() {
        return (
            <div className="selectEmail">
                {this.state.selected.map((item) => <button type="submit" className={`${this.onValid(item) ? "valid" : "invalid"}`} onClick={() => this.onDelete(item)}>{item}</button>)}
                <input type="text" value={this.state.value} placeholder="Enter recipients..." onChange={this.onChange} onKeyDown={this.onKeyDown}/>
            </div>
        );
    }

    renderDropdown() {
        if(this.state.dropdown.length === 0){
            return null;
        }
        return (
            <ul>
                {this.state.dropdown.map((item) => <li key={item} onClick={() => this.onSelect(item)}>{item}</li>)}
            </ul>
        );
    }
  
    render() {
        return (
        <div className="submitEmail">
            <div className="flexDiv">
                {this.renderSelected()}
            </div>
            {this.renderDropdown()}
        </div>
        );
    }
}
  
export default Email;