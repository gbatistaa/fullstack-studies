using System;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class Player3 : MonoBehaviour
{
  private Rigidbody2D rb;
  private Animator anim;

  [SerializeField]
  private float moveSpeed = 11f;

  [SerializeField]
  private float jumpForce = 10.0f;
  private float xInput;

  [SerializeField]
  private bool facingRight = true;

  private void Awake()
  {
    // Use the GetComponent function to be able to modify a private component on the Unity Editor:
    rb = GetComponent<Rigidbody2D>();
    // GetComponentInChildren because the Animator component is a child of Player
    anim = GetComponentInChildren<Animator>();
  }

  private void Update()
  {
    HandleJump();
    HandleMovement();
    HandleAnimator();
    HandleFlip();
  }

  // Jump functionality
  private void Jump()
  {
    rb.linearVelocity = new Vector2(rb.linearVelocity.x, jumpForce);
  }

  private void HandleMovement()
  {
    xInput = Input.GetAxisRaw("Horizontal");
    rb.linearVelocity = new Vector2(xInput * moveSpeed, rb.linearVelocity.y);
  }

  private void HandleAnimator()
  {
    bool isMoving = Mathf.Abs(xInput) > 0.1f;
    anim.SetBool("isMoving", isMoving);
  }

  private void HandleJump()
  {
    if (Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.UpArrow))
      Jump();
  }

  private void HandleFlip()
  {
    if (rb.linearVelocity.x > 0 && !facingRight || rb.linearVelocity.x < 0 && facingRight)
      Flip();
  }

  private void Flip()
  {
    // Makes that the caracther flips when change the size
    transform.Rotate(0, 180, 0);
    facingRight = !facingRight;
  }
}
