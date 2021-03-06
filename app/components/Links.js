import React from 'react';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';
import { scrapSite, submitCreateLink, deleteLink, updateLink } from '../actions/links';
import Messages from './Messages';

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      link: '',
      title: '',
      description: '',
      displayFullInput: false,
      links: [],
      updateId: '',
      updateLink: '',
      updateTitle: '',
      updateDescription: '',
      searchString: '',
      searchResults: ''
    };
    console.log('token', this.props.token);
    this.handleScrapper = this.handleScrapper.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleScrapper(event) {
    event.preventDefault();
    fetch('/api/scrapper?site=' + this.state.link, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let filterData = data.links;
      this.setState({
        link: data.site.link,
        title: data.site.title,
        description: data.site.description,
        displayFullInput: true
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.displayFullInput){
      this.props.dispatch(submitCreateLink(
        this.state.user._id,
        this.state.link,
        this.state.title,
        this.state.description,
        this.props.token
      ));
      this.setState({
        link: '',
        title: '',
        description: '',
        displayFullInput: false
      });
      setTimeout(() => {
        this.getLinks();
      }, 1000);
    } else {
      this.handleScrapper(event);
    }
  }

  handleDelete(id, index) {
    this.setState((prevState) => ({
      links: prevState.links.filter((_, i) => i !== index)
    }));
    this.props.dispatch(deleteLink(id, this.props.token));
  }

  handleUpdate(link, index) {
    this.setState({
      updateIndex: index,
      updateId: link._id,
      updateLink: link.link,
      updateTitle: link.title,
      updateDescription: link.description,
    });
  }

  handleSaveUpdate(event) {
    event.preventDefault();
    this.props.dispatch(updateLink(
      this.state.updateId,
      this.state.updateLink,
      this.state.updateTitle,
      this.state.updateDescription,
      this.props.token
    ));

    let stateCopy = Object.assign({}, this.state);
    stateCopy.links[this.state.updateIndex].link = this.state.updateLink;
    stateCopy.links[this.state.updateIndex].title = this.state.updateTitle;
    stateCopy.links[this.state.updateIndex].description = this.state.updateDescription;

    this.setState(stateCopy);

    this.setState({
      updateIndex: '',
      updateId: '',
      updateLink: '',
      updateTitle: '',
      updateDescription: '',
    });
  }

  getLinks(){
    fetch('/api/link?userid=' + this.state.user._id, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let filterData = data.links;
      filterData.sort((a, b) => {
          return parseFloat(b.time) -parseFloat(a.time);
      });
      this.setState({
        links:filterData
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSearch(event) {
    this.handleChange(event)
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 30,
      minMatchCharLength: 1,
      keys: ['title', 'url','description']
    };
    var fuse = new Fuse(this.state.links, options);
    var searchResults = fuse.search(this.state.searchString);
    this.setState({
      searchResults: searchResults
    })
  }

  componentDidMount() {
    this.getLinks();
  }

  render() {
    let filteredLinks = this.state.links;
    if(this.state.searchString.length > 1){
      filteredLinks = this.state.searchResults;
    }
    return (


      <div className="container">
        <card>
          <input type="text" name="searchString" id="searchString" placeholder="Search..." value={this.state.searchString} onChange={this.handleSearch.bind(this)}/>
        </card>

        <card>
          <form onSubmit={this.handleSubmit.bind(this)}>
            {this.state.displayFullInput ? (
              <span>
                <input type="text" name="title" id="title" value={this.state.title} placeholder="Title..."onChange={this.handleChange.bind(this)} autoFocus/>
                <input type="text" name="link" id="link" value={this.state.link} placeholder="Insert your link here"onChange={this.handleChange.bind(this)} autoFocus/>
                <textarea name="description" id="description" value={this.state.description} placeholder="Description..." onChange={this.handleChange.bind(this)} autoFocus/>
                <button type="submit">Create</button>
              </span>
            ) : (
              <span>
                <input type="text" name="link" id="link" value={this.state.link} placeholder="Insert your link here"onChange={this.handleChange.bind(this)} autoFocus/>
                <button type="submit">Next</button>
              </span>
            )}
          </form>
        </card>

        {filteredLinks.map((link, i) => {
          return (
            <card key={link._id}>
              {
                 link._id === this.state.updateId ?
                    <form onSubmit={this.handleSaveUpdate.bind(this)}>
                      <input type="text" name="updateTitle" placeholder="Title" id="updateTitle" value={this.state.updateTitle}  onChange={this.handleChange.bind(this)}/>
                      <input type="text" name="updateLink" placeholder="Link" id="updateLink" value={this.state.updateLink} onChange={this.handleChange.bind(this)}/>
                      <textarea name="updateDescription" placeholder="Description" id="updateDescription" value={this.state.updateDescription} onChange={this.handleChange.bind(this)}></textarea>
                      <button type="submit" value={this.state.updateId}>Save</button>
                    </form>
                 :
                   <div>
                     <h5 className="cardTitle">{link.title}</h5>
                     <a href={link.link} className="cardLink" target="_blank"><p>{link.link}</p></a>
                     <p className="cardDescription">{link.description}</p>
                     <button onClick={()=>this.handleUpdate(link, i)}>Update <i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                     <button onClick={()=>this.handleDelete(link._id, i)}> Delete <i className="fa fa-trash-o" aria-hidden="true"></i></button>
                   </div>
              }
            </card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Links);
