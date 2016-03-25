/* global React */

import ServicesListItem from 'js/views/services-list-item';

export default class ServicesList extends React.Component {
  render() {
    let userFacingServices = this.props.services.filter(
      (service) => this.isUserFacingService(service)
    );

    let serviceNodes = userFacingServices.map((service, id) => (
        <ServicesListItem
          key={service.id}
          id={service.id}
          name={service.properties.name}
          type={service.type}
          manufacturer={service.properties.manufacturer}
          model={service.properties.model}
          state={service.state}
          foxbox={this.props.foxbox}/>
      )
    );

    return (
      <ul className="service-list">{serviceNodes}</ul>
    );
  }

  isUserFacingService(service) {
    switch (service.type) {
      case 'ip-camera@link.mozilla.org':
        return true;
      default:
        return false;
    }
  }
}
