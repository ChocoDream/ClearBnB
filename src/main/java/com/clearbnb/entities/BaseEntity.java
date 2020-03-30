package com.clearbnb.entities;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@MappedSuperclass
/*@Getter
@Setter
@EqualsAndHashCode(of = "id")*/
public abstract class BaseEntity implements Serializable {

    /*@Id
    @Column(name = "id", nullable = false, unique = true, updatable = false, length = 32)
    protected String id = IdGenerator.generateId();*/

}