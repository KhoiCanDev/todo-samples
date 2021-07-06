package dev.khoican.todo.controllers;

import dev.khoican.todo.models.Todo;
import dev.khoican.todo.repositories.TodoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todos")
public class TodoController {
    private TodoRepository repo;

    public TodoController(TodoRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Todo> GetList() {
        var result = new ArrayList<Todo>();
        var toDoIterable = repo.findAll();
        toDoIterable.forEach(result::add);
        return result;
    }

    @GetMapping("/{id}")
    public Todo GetById(@PathVariable("id") Long id) {
        var toDo = repo.findById(id);
        return toDo.orElse(null);
    }

    @PutMapping
    public Todo Update(@RequestBody() Todo todo) {
        var toDo = repo.save(todo);
        return toDo;
    }

    @PostMapping
    public Todo Add(@RequestBody() Todo todo) {
        var toDo = repo.save(todo);
        return toDo;
    }
}
