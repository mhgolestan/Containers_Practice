import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {
  const mockTodo = {
    _id: '1',
    text: 'Test todo',
    done: false
  };
  const mockOnDelete = vi.fn();
  const mockOnComplete = vi.fn();

  it('renders todo text', () => {
    render(<Todo todo={mockTodo} onDelete={mockOnDelete} onComplete={mockOnComplete} />);
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  it('shows correct buttons for incomplete todo', () => {
    render(<Todo todo={mockTodo} onDelete={mockOnDelete} onComplete={mockOnComplete} />);
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('Set as done')).toBeInTheDocument();
    expect(screen.getByText('This todo is not done')).toBeInTheDocument();
  });

  it('shows correct buttons for complete todo', () => {
    const doneTodo = { ...mockTodo, done: true };
    render(<Todo todo={doneTodo} onDelete={mockOnDelete} onComplete={mockOnComplete} />);
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument();
    expect(screen.getByText('This todo is done')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<Todo todo={mockTodo} onDelete={mockOnDelete} onComplete={mockOnComplete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalled();
  });

  it('calls onComplete when set as done button is clicked', () => {
    render(<Todo todo={mockTodo} onDelete={mockOnDelete} onComplete={mockOnComplete} />);
    fireEvent.click(screen.getByText('Set as done'));
    expect(mockOnComplete).toHaveBeenCalled();
  });
});