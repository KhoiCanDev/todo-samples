package dev.khoican.todo.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("todo")
public class Todo {

    @Id
    private Long id;
    private String title;
    private String description;
    @Column("is_done")
    private boolean done;
}
