using System;
using UnityEngine;
using UnityEngine.InputSystem;

[RequireComponent(typeof(Rigidbody2D))]
public class PlayerMovement : MonoBehaviour
{
  private Animator animator;
  public float moveSpeed = 5f;

  private Rigidbody2D rb;
  private Vector2 movement;

  void Start()
  {
    rb = GetComponent<Rigidbody2D>();
    animator = GetComponentInChildren<Animator>();
  }

  // Chamado automaticamente pelo PlayerInput
  public void OnMove(InputValue value)
  {
    movement = value.Get<Vector2>();
    movement = movement.normalized;
    HandleMovementAnimation();
  }

  private void HandleMovementAnimation()
  {
    animator.SetFloat("MoveX", movement.x);
    animator.SetFloat("MoveY", movement.y);
    animator.SetBool("IsMoving", movement != Vector2.zero);
  }

  void FixedUpdate()
  {
    rb.MovePosition(rb.position + movement * moveSpeed * Time.fixedDeltaTime);
  }
}
