using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class Player3 : MonoBehaviour
{
  private Rigidbody2D rb;

  [SerializeField]
  private float moveSpeed = 10.0f;

  [SerializeField]
  private float jumpForce = 8f;
  private float xInput;

  // Jump functionality
  private void Jump()
  {
    rb.linearVelocity = new Vector2(rb.linearVelocity.x, jumpForce);
  }

  public void HandleMovement()
  {
    rb.linearVelocity = new Vector2(xInput * moveSpeed, rb.linearVelocity.y);
  }

  public void HandleInput()
  {
    if (Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.UpArrow))
      Jump();
  }

  private void Awake()
  {
    // Use the GetComponent function to be able to modify a private component on the Unity Editor:
    rb = GetComponent<Rigidbody2D>();
  }

  private void Update()
  {
    xInput = Input.GetAxisRaw("Horizontal");
    HandleInput();
    HandleMovement();
  }
}
