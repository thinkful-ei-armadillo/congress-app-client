import React from 'react';

function CompareMemberListItem(props) {
  let { member } = props;
  const clickMember = e => {
    e.preventDefault();
    props.setDisplay(member);
  };
  return (
    <a onClick={e => clickMember(e)} href="#">
      <p>
        {member.first_name} {member.last_name}, {member.title}
      </p>
    </a>
  );
}

export default CompareMemberListItem;
