import React, { useState } from 'react';

function AddMembers(props) {
    const [members, setMembers] = useState(null);
  
    const submitForm = e => {
      e.preventDefault();
      const { search } = e.target;
      const params = { query: search.value };
      MemberApiService.getMembers(params).then(members => {
        setMembers(members);
      });
    };

return (  
)
}  