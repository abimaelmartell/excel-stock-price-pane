import * as React from "react";

export interface HeaderProps {
  title: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    const { title } = this.props;

    return (
      <section className="ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500">
        <h1 className="ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary">{title}</h1>
      </section>
    );
  }
}
